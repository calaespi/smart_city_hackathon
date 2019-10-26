<?php

class tiempo
{
    public $precipIntensity = "";
    public $precipProbability = "";
    public $temperature = "";
    public $apparentTemperature = "";
    public $dewPoint = "";
    public $humidity = "";
    public $pressure = "";
    public $windGust = "";
    public $windBearing = "";
    public $cloudCover = "";
    public $uvIndex = "";
    public $visibility = "";
    public $ozone = "";
    public $windSpeed = "";
    public $timestamp = "";

    //Setters
    function set_precipIntensity($precipIntensity)
    {
        $this->precipIntensity = $precipIntensity;
    }
    function set_precipProbability($precipProbability)
    {
        $this->precipProbability = $precipProbability;
    }
    function set_temperature($temperature)
    {
        $this->temperature = $temperature;
    }
    function set_apparentTemperature($apparentTemperature)
    {
        $this->apparentTemperature = $apparentTemperature;
    }
    function set_dewPoint($dewPoint)
    {
        $this->dewPoint = $dewPoint;
    }
    function set_humidity($humidity)
    {
        $this->humidity = $humidity;
    }
    function set_pressure($pressure)
    {
        $this->pressure = $pressure;
    }
    function set_windGust($windGust)
    {
        $this->windGust = $windGust;
    }
    function set_windBearing($windBearing)
    {
        $this->windBearing = $windBearing;
    }
    function set_cloudCover($cloudCover)
    {
        $this->cloudCover = $cloudCover;
    }
    function set_uvIndex($uvIndex)
    {
        $this->uvIndex = $uvIndex;
    }
    function set_visibility($visibility)
    {
        $this->visibility = $visibility;
    }
    function set_ozone($ozone)
    {
        $this->ozone = $ozone;
    }
    function set_windSpeed($windSpeed)
    {
        $this->windSpeed = $windSpeed;
    }
    function set_timestamp($timestamp)
    {
        $this->timestamp = $timestamp;
    }

    // Getters
    function get_precipIntensity()
    {
        return $this->precipIntensity;
    }
    function get_precipProbability()
    {
        return $this->precipProbability;
    }
    function get_temperature()
    {
        return $this->temperature;
    }
    function get_apparentTemperature()
    {
        return $this->apparentTemperature;
    }
    function get_dewPoint()
    {
        return $this->dewPoint;
    }
    function get_humidity()
    {
        return $this->humidity;
    }
    function get_pressure()
    {
        return $this->pressure;
    }
    function get_windGust()
    {
        return $this->windGust;
    }
    function get_windBearing()
    {
        return $this->windBearing;
    }
    function get_cloudCover()
    {
        return $this->cloudCover;
    }
    function get_uvIndex()
    {
        return $this->uvIndex;
    }
    function get_visibility()
    {
        return $this->visibility;
    }
    function get_ozone()
    {
        return $this->ozone;
    }
    function get_windSpeed()
    {
        return $this->windSpeed;
    }
    function get_timestamp()
    {
        return $this->timestamp;
    }
}
