import express from "express";
import React from "react";
import { renderToString } from "react-dom/server"
import { StaticRouter } from 'react-router-dom';
import Index from "../pages"

const router = express.Router();

router.get('/*', async (req, res) => {
    const context = {} as any;
    const app = renderToString(
      <StaticRouter location={req.url} context={context}>
          <Index />
      </StaticRouter>
    );
    const reactComp = renderToString(<Index/>);
    if (context.url) {
      // can use the `context.status` that
      // we added in RedirectWithStatus
      res.redirect(context.status, context.url);
    }

    res.status(200).render(app);
});

export default router;
