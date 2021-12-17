import React from "react";
import { useParams, Link } from "react-router-dom";

const EditarProyectos = () => {

  const { _id } = useParams();

  return <div>Editar Proyecto{_id}</div>;
};


export default EditarProyectos;