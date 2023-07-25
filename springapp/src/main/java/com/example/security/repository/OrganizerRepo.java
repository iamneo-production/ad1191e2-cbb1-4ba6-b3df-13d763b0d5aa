package com.example.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.security.entity.Organizer;


@Repository
public interface OrganizerRepo extends JpaRepository<Organizer,Integer> {

}


