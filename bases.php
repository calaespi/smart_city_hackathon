<?php

class bases
{
    public $id = "";
    public $punto = "";
    public $puestos = "";
    public $ocupados = "";
    public $location = "";
    public $timestamp = "";
    public $porcentaje_ocupacion = "";

    //Setters
    function set_id($id)
    {
        $this->id = $id;
    }
    function set_punto($punto)
    {
        $this->punto = $punto;
    }
    function set_puestos($puestos)
    {
        $this->puestos = $puestos;
    }
    function set_ocupados($ocupados)
    {
        $this->ocupados = $ocupados;
    }
    function set_location($location)
    {
        $this->location = $location;
    }
    function set_timestamp($timestamp)
    {
        $this->timestamp = $timestamp;
    }
    function set_porcentaje_ocupacion($porcentaje_ocupacion)
    {
        $this->porcentaje_ocupacion = $porcentaje_ocupacion;
    }

    //Getters
    function get_id()
    {
        return $this->id;
    }
    function get_punto()
    {
        return $this->punto;
    }
    function get_puestos()
    {
        return $this->puestos;
    }
    function get_ocupados()
    {
        return $this->ocupados;
    }
    function get_location()
    {
        return $this->location;
    }
    function get_timestamp()
    {
        return $this->timestamp;
    }
    function get_porcentaje_ocupacion()
    {
        return $this->porcentaje_ocupacion;
    }
}
