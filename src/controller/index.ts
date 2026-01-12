import { Context } from "hono";
import { prisma } from '../../prisma/client/index';

export const getFilm = async (c: Context) => {
    try{
        const data = await prisma.film.findMany()

        if(!data){
            return c.json({
                success: false,
                message: "Film Not Found"
            }, 404)
        }

        return c.json({
            success: true,
            message: "success",
            data: data
        }, 200)
    }catch(err){
        return c.json({
            success: false,
            message: err
        }, 400)
    }
}

export const getDonghua = async (c: Context) => {
    try{
        const data = await prisma.film.findMany({
            where:{
                type: "Donghua"
            }
        })

        if(!data){
            return c.json({
                success: false,
                message: "Film Not Found"
            }, 404)
        }

        return c.json({
            success: true,
            message: "success",
            data: data
        }, 200)
    }catch(err){
        return c.json({
            success: false,
            message: err
        }, 400)
    }
}

export const getAnime = async (c: Context) => {
    try{
        const data = await prisma.film.findMany({
            where: {
                type: "Anime"
            }
        })

        if(!data){
            return c.json({
                success: false,
                message: "Film Not Found"
            }, 404)
        }

        return c.json({
            success: true,
            message: "success",
            data: data
        }, 200)
    }catch(err){
        return c.json({
            success: false,
            message: err
        }, 400)
    }
}

export const addFilm = async (c: Context) => {
    try{
        const body = await c.req.json()

        const name = body.name ?? '';
        const episode = body.episode ?? 0;
        const link = body.link ?? '';
        const image = body.image ?? '';
        const type = body.type ?? '';
        const active = body.active ?? false;

        const data = await prisma.film.create({
            data: {
                name: name,
                episode: episode,
                link: link,
                image: image,
                type: type,
                active: active
            }
        })

        return c.json({
            success: true,
            message: "success",
            data: data
        }, 200)
    }catch(err){
        return c.json({
            success: false,
            message: err
        }, 400)
    }
}

export const getDetailFilm = async(c: Context) => {
    try{
        const filmId = parseInt(c.req.param('id'))

        const data = await prisma.film.findUnique({
            where: {
                id: filmId
            }
        })

        if(!data){
            return c.json({
                success: false,
                message: "Film Not Found"
            }, 404)
        }

        return c.json({
            success: true,
            message: "success",
            data: data
        }, 200)
    }catch(err){
        return c.json({
            success: false,
            message: err
        }, 400)
    }
}

export const updateFilm = async (c: Context) => {
    try{
        const filmId = parseInt(c.req.param('id'))
        const body = await c.req.json()

        const data = await prisma.film.update({
            where: {
                id: filmId
            },
            data: {
                name: body.name,
                episode: body.episode,
                link: body.link,
                image: body.image,
                type: body.type,
                active: body.active
            }
        })

        return c.json({
            success: true,
            message: "success",
            data: data
        }, 200)
    }catch(err){
        return c.json({
            success: false,
            message: err
        }, 400)
    }
}

export const deleteFilm = async (c: Context) => {
    try{
        const filmId = parseInt(c.req.param('id'))

        const data = await prisma.film.delete({
            where: {
                id: filmId
            }
        })

        return c.json({
            success: true,
            message: "success",
            data: data
        }, 200)
    }catch(err){
        return c.json({
            success: false,
            message: err
        }, 400)
    }
}