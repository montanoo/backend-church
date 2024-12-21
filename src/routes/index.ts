import { Router } from 'express';
import * as tokenController from '../controllers/tokenController';

const router = Router();

router.post('/tokens', tokenController.createToken);
router.get('/tokens/:id', tokenController.getToken);
router.get('/tokens', tokenController.getAllTokens);
router.put('/tokens/:id', tokenController.updateToken);
router.delete('/tokens/:id', tokenController.deleteToken);

export default router;