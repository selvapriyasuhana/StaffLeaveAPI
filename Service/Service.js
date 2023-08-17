/*const { Dao_view } = require("../Dao/Dao.js");

Dao = require("../Dao/Dao.js");

exports.Service_index = function (err, callback) {
  Dao.Dao_index(err, callback);
  if (err) return console.error(err);
  callback(staff);
};

exports.Service_add = function (err, callback) {
  Dao.Dao_add(err, callback);
  if (err) return console.error(err);
  callback(staff);
};

exports.Service_view = function (err, callback) {
  Dao.Dao_view(err, callback);
  if (err) return console.error(err);
  callback(staff);
};

exports.Service_update = function (err, callback) {
  Dao.Dao_update(err, callback);
  if (err) return console.error(err);
  callback(staff);
};

exports.Service_Delete = function (err, callback) {
  Dao.Dao_Delete(err, callback);
  if (err) return console.error(err);
  callback(staff);
};*/

const Dao = require("../Dao/Dao.js");

exports.Service_index = async () => {
  try {
    return await Dao.Dao_index();
  } catch (error) {
    throw error;
  }
};

exports.Service_add = async (staff) => {
  try {
    return await Dao.Dao_add(staff);
  } catch (error) {
    throw error;
  }
};

exports.Service_view = async (Name) => {
  try {
    return await Dao.Dao_view(Name);
  } catch (error) {
    throw error;
  }
};

exports.Service_update = async (Name, staffData) => {
  try {
    return await Dao.Dao_update(Name, staffData);
  } catch (error) {
    throw error;
  }
};

exports.Service_Delete = async (Name) => {
  try {
    return await Dao.Dao_Delete(Name);
  } catch (error) {
    throw error;
  }
};
