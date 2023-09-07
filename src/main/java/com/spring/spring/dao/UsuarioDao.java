package com.spring.spring.dao;

import com.spring.spring.models.Usuario;
import java.util.List;

public interface UsuarioDao {

    List<Usuario> buscar();

    void eliminar(int id);

    void registrar(Usuario usuario);

    Usuario verificarDatos(Usuario usuario);
}
