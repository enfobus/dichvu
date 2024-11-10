import { fetchServices } from '../lib/api';
import Link from 'next/link';

export default function Home({ services }) {
    return (
        <div>
            <h1>Dịch Vụ In Ấn Nổi Bật</h1>
            <div>
                {services.map((service) => (
                    <div key={service.id}>
                        <h2>{service.attributes.title}</h2>
                        <p>{service.attributes.description}</p>
                        <Link href={`/services/${service.attributes.slug}`}>
                            Xem chi tiết
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const services = await fetchServices();
    return { props: { services }, revalidate: 10 };
}
