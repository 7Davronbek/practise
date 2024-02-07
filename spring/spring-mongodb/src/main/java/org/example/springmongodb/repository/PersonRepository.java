package org.example.springmongodb.repository;
import org.example.springmongodb.collection.Person;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonRepository extends MongoRepository<Person, String> {
    List<Person> findByFirstNameStartsWith(String name);

//    List<Person> findByAgeBetween(Integer min, Integer max);
    @Query(
            value = "{ 'age': { $gte: ?0, $lte: ?1 } }",
            fields = "{addresses:  0, hobbies:  0}"
    )
    List<Person> findPersonByAgeBetween(Integer min, Integer max);
}
