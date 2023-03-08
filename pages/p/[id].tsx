import { GetServerSideProps } from 'next';
import prisma from '../../lib/prisma';

export const getServerSideProps: GetServerSideProps= async ({ params }) => {
    const post = await prisma.post.findUnique({
        where: {
            id: String(params?.id),
        },
        include: {
            author: {
                select: { name: true },
            },
        },
    });
    return {
        props: post,
    };
};