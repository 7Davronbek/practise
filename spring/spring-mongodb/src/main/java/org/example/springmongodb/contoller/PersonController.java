package org.example.springmongodb.contoller;

import lombok.RequiredArgsConstructor;
import org.example.springmongodb.collection.Person;
import org.example.springmongodb.service.PersonService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/person")
@RequiredArgsConstructor
public class PersonController {
    private final PersonService personService;

    @PostMapping
    public String save(@RequestBody Person person) {
        return personService.save(person);
    }

    @GetMapping
    public List<Person> getPersonStartWith(@RequestParam("name") String name) {
        return personService.getPersonStartWith(name);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        personService.delete(id);
    }

    @GetMapping("/age")
    public List<Person> getByPersonAge(
            @RequestParam Integer minAge,
            @RequestParam Integer maxAge
    ) {
        return personService.getByPersonAge(minAge, maxAge);
    }
}
