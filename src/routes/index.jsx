import express from "express";
import React from "react";
import { renderToString } from "react-dom/server"
import { StaticRouter } from 'react-router-dom';
import Index from "../pages"

const router = express.Router();

router.get('/*', async (req, res) => {
    const app = renderToString(
      <StaticRouter location={req.url} context={context}>
          <App />
      </StaticRouter>
    );
    const reactComp = renderToString(<Index/>);
    res.status(200).render('pages/index', { reactApp: reactComp });
});

export default router;
