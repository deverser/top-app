import { ProductProps } from './Product.props';
import cn from 'classnames';
import styles from './Product.module.css';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
	return (
		<Card>
			<div className={styles.logo}><img src={product.image} alt={product.title} /></div>
			<div className={styles.title}>{product.title}</div>
			<div className={styles.price}>{product.price}</div>
			<div className={styles.credit}>{product.credit}</div>
			<div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
			<div className={styles.tag}>{product.categories.map((c) => <Tag color='ghost' key={c}>{c}</Tag>)}</div>
		</Card>
	);
}; 