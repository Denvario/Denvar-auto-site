import cars from '../../data/cars.json';
import { useRouter } from 'next/router';

export default function CarDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const car = cars.find(car => car.slug === slug);

  if (!car) return <p>Loading...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{car.make} {car.model} ({car.year})</h1>
      <img src={car.image} alt={car.model} style={{ width: '100%', maxWidth: '400px' }} />
      <p><strong>Mileage:</strong> {car.mileage}</p>
      <p><strong>Price:</strong> {car.price}</p>
      <a href={`https://wa.me/27635415450`} target="_blank" rel="noopener noreferrer">
        📲 Enquire via WhatsApp
      </a>
    </div>
  );
}
