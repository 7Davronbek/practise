package org.example.project.author.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.*;
import org.example.project.article.entity.Article;

import java.util.Set;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Author {
    @Id
    private UUID id;
    @Column(unique = true)
    private String fullName;
    private String orgName;
    private String description;
    private String image;

    @ManyToMany(mappedBy = "authors")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private Set<Article> journals;
}
