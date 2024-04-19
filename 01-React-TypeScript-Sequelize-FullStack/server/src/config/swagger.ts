import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: "3.0.2",
    tags: [
      {
        name: "Products",
        description: "API de productos",
      },
      info: {
        title: 'Rest api',
        version: '1.0.0',
        
      }
    ],
  },
};
