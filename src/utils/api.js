import axios from "axios";

export const obtenerProductos = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: "http://localhost:4000/productos/ver/",
    headers: {},
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarProducto = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:4000/productos/${id}`,
    headers: { 'Content-Type': 'application/json' },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarProducto = async (id, successCallback, errorCallback) => {
  const options = {
    method: 'DELETE',
    url: `http://localhost:4000/productos/${id}`,
    headers: { 'Content-Type': 'application/json' },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerUsuarios = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: "http://localhost:4000/usuarios/listar",
    headers: {},
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarUsuario = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:4000/usuarios/${id}`,
    headers: { 'Content-Type': 'application/json' },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearVenta = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "http://localhost:4000/ventas/crear",
    headers: { "Content-Type": "application/json" },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerVenta = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: "http://localhost:4000/ventas/listar/",
    headers: {},
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarVenta = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:4000/ventas/${id}`,
    headers: { 'Content-Type': 'application/json' },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

