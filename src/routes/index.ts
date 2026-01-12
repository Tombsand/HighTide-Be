import { Hono } from 'hono';
import { addFilm, deleteFilm, getAnime, getDetailFilm, getDonghua, getFilm, updateFilm } from '../controller/index';

const router = new Hono()

router.get('/', (c) => getFilm(c))
router.post('/', (c) => addFilm(c))
router.get('/donghua', (c) => getDonghua(c))
router.get('/anime', (c) => getAnime(c))
router.get('/:id', (c) => getDetailFilm(c))
router.patch('/:id', (c) => updateFilm(c))
router.delete('/:id', (c) => deleteFilm(c))

export const routes = router;