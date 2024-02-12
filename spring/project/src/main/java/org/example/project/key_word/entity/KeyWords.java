package org.example.project.key_word.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.*;
import org.example.project.journal.entity.Journal;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class KeyWords {
    @Id
    private String name;

    @ManyToMany(mappedBy = "keywords")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private Set<Journal> journals;
}
