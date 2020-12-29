import React from "react";

import styles from "../styles/Projects.module.scss";

import ProyectPreview from "./ProjectPreview";

const Projects = () => {
  return (
    <div className={styles.projects} id="proyects">
      <h3>Mis Proyectos</h3>
      <div className={styles.grid}>
        <ProyectPreview
          title="CRM GraphQl"
          subtitle="Administración de clientes, productos y pedidos"
          thumbnail="/crmt.png"
          type="desktop"
          buttons={[
            {
              link: "https://github.com/ThomyR73/CRMGraphQLClient",
              name: "Ver Codigo",
            },
            {
              link: "https://crm-graph-ql-client.vercel.app/",
              name: "Ver Deploy",
            },
          ]}
        >
          <p>
            Esta aplicación esta programada en React, usando Next.Js y Tailwind.
            Consume un servidor programado por mí en Node.js con Apolloserver,
            generando un api GraphQL. Tiene un Login con verificación usando
            Formik y Yup, permite crear, modificar y eliminar productos, pedidos
            e imágenes. También se puede visualizar los mejores clientes y
            vendedores con graficas hechas en Recharts
          </p>
        </ProyectPreview>
        <ProyectPreview
          title="Buscador de Personajes"
          subtitle="Web app con React y GraphQL"
          thumbnail="/rmrt.png"
          type="desktop"
          buttons={[
            {
              link: "https://github.com/ThomyR73/ReactRickAndMortyApiChallenge",
              name: "Ver Codigo",
            },
            {
              link: "https://react-rick-and-morty-api-challenge.vercel.app/",
              name: "Ver Deploy",
            },
          ]}
        >
          <p>
            Esta aplicación esta desarrollada con React, Next.js, Bootstrap y
            Typescript. Consume la api GraphQL de Rick & Morty usando
            ApolloClient. Permite buscar personajes, locaciones y episodios, y
            la barra de búsqueda tiene implementada la funcionalidad de "search
            as you type"
          </p>
        </ProyectPreview>
        <ProyectPreview
          title="Bugacino GNC"
          subtitle="Sitio Web Empresarial"
          thumbnail="/bt.png"
          type="desktop"
          buttons={[
            {
              link: "http://bugacino.com/",
              name: "Ver Deploy",
            },
          ]}
        >
          <p>
            Esta página fue hecha para un taller de GNC. En principio es una
            landing page simple desarrollada HTML5, SAAS y Javascript.
            Integrando una funcionalidad extra a pedido del cliente que es una
            calculadora que devuelve al usuario los potenciales ahorros de un
            equipo de gnc, la misma está hecha con Javascript y usando Canvas
            para visualizar los datos retornados
          </p>
        </ProyectPreview>
        <ProyectPreview
          title="App móvil buscador de Personajes"
          subtitle="Con ReactNative y GraphQL"
          thumbnail="/rnt.png"
          type="mobile"
          buttons={[
            {
              link:
                "https://github.com/ThomyR73/ReactNativeRickAndMortyApiChallenge",
              name: "Ver Codigo",
            },
          ]}
        >
          <p>
            Esta app móvil esta desarrollada con ReactNative, Expo y Typescript.
            Consume la api GraphQL de Rick & Morty con ApolloClient. Sirve para
            buscar personajes, locaciones y episodios, la navegación entre los
            distintos menús está hecha con React Navigation. La barra de
            búsqueda tiene implementado la funcionalidad de 'search as you
            type', y tambien se implementó un 'infinite scroll' para mostrar más
            personajes al llegar al final de la vista
          </p>
        </ProyectPreview>
      </div>
    </div>
  );
};

export default Projects;
