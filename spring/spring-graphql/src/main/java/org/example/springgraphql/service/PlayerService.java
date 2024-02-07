package org.example.springgraphql.service;

import jakarta.annotation.PostConstruct;
import org.example.springgraphql.model.Player;
import org.example.springgraphql.model.Team;
import org.springframework.stereotype.Service;

import javax.swing.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;

@Service
public class PlayerService {
    private List<Player> players = new ArrayList<>();

    AtomicInteger id = new AtomicInteger(0);

    public List<Player> findAll() {
        return players;
    }

    public Optional<Player> findOne(Integer id) {
        return players.stream().filter(player -> player.id() == id).findFirst();
    }

    public Player create(String name, Team team) {
        Player player = new Player(id.incrementAndGet(), name, team);
        players.add(player);
        return player;
    }

    public Player delete(Integer id) {
        Player player = players.stream().filter(p -> p.id() == id)
                .findFirst().orElseThrow(() -> new IllegalArgumentException("Player not found"));
        players.remove(player);
        return player;
    }

    public Player update(Integer id, String name, Team team) {
        Player updatedPlayer = new Player(id, name, team);
        Player player = players.stream().filter(p -> p.id() == id).findFirst().orElseThrow(() -> new IllegalArgumentException("Invalid player"));

        int index = players.indexOf(player);
        players.set(index, updatedPlayer);

        return updatedPlayer;
    }

    @PostConstruct
    private void init() {
        players.add(new Player(id.incrementAndGet(), "Lorem", Team.VUE));
        players.add(new Player(id.incrementAndGet(), "Ipsum", Team.REACT));
        players.add(new Player(id.incrementAndGet(), "Dolor", Team.JAVA));
        players.add(new Player(id.incrementAndGet(), "Test", Team.PYTHON));
    }
}
