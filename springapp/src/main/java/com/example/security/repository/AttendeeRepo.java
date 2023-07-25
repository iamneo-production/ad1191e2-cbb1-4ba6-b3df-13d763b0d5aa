package com.example.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.security.entity.Attendee;

@Repository
public interface AttendeeRepo extends JpaRepository<Attendee,Integer> {

}

