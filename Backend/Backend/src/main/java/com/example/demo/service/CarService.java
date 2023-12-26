package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.entity.Car;

public interface CarService {
    void addCar(Car car);
    List<Car> findAll();
    void saveOrUpdate(Car car);
    void deleteById(int carId);
    Optional<Car> findCarById(int id);
}
