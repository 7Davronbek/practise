package org.example.springmongodb.repository;
import org.example.springmongodb.collection.Photo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface PhotoRepository extends MongoRepository<Photo, String> {
}
