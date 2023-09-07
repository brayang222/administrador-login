package com.spring.spring.controllers;

import com.spring.spring.dao.UsuarioDao;
import com.spring.spring.models.Usuario;
import com.spring.spring.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    private UsuarioDao usuarioDao;
    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value = "api/login", method = RequestMethod.POST)
    public String login(@RequestBody Usuario usuario) {

        Usuario usuarioLogin = usuarioDao.verificarDatos(usuario);
        if(usuarioLogin != null) {
            String token = jwtUtil.create(String.valueOf(usuarioLogin.getId()), usuarioLogin.getEmail());
            return token;
        }
        return "FAIL";
    }

}
