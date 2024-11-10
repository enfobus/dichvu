import { fetchServices } from '../../lib/api';

export default function ServiceDetail({ service }) {
    if (!service) return <p>Dịch vụ không tồn tại.</p>;

    const { title, description, image } = service.attributes;
    return (
        <div>
            <h1>{title}</h1>
            <img src={image.data.attributes.url} alt={title} />
            <p>{description}</p>
        </div>
    );
}

export async function getStaticPaths() {
    const services = await fetchServices();
    const paths = services.map((service) => ({
        params: { slug: service.attributes.slug },
    }));

    return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
    const services = await fetchServices();
    const service = services.find((s) => s.attributes.slug === params.slug);

    return { props: { service: service || null }, revalidate: 10 };
}
