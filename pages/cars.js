import cars from '../data/cars.json';
import Link from 'next/link';

export default function CarsPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Available Cars</h1>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {cars.map(car => (
          <div key={car.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <img src={car.image} alt={car.model} style={{ width: '100%', maxWidth: '300px' }} />
            <h2>{car.make} {car.model} ({car.year})</h2>
            <p>Mileage: {car.mileage}</p>
            <p>Price: {car.price}</p>
            <Link href={`/cars/${car.slug}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
