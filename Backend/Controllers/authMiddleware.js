const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'AnshSharma';

exports.verifyToken = function verifyToken(req, res, next) {
    const token = req.cookies.token;
    if (!token) return res.status(403).send('No token provided');
  
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) return res.status(500).send('Failed to authenticate token');
      req.id = decoded.id;
      next();
    });
}