import React from 'react';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';

import styles from './NoSlider.module.scss';

interface INoSlider {
	svgElement: any,
	title: string,
}

export const NoSlider = ({ svgElement, title }: INoSlider) => {
	const formatTooltip = (value: number) => {
		const intValue = Math.floor(Number(value));
		return intValue.toString();
	};

	const [value, setValue] = React.useState([0, 20]);

	const handleSliderChange = (values: number[]) => {
		setValue(values);
	};

	const handleInputChange1 = (e: any) => {
		const inputValue = e.target.value;
		if (!isNaN(inputValue)) {
			const parsedValue = parseFloat(inputValue);
			setValue([Math.max(parsedValue, 0), value[1]]);
		}
	};

	const handleInputChange2 = (e: any) => {
		const inputValue = e.target.value;
		if (!isNaN(inputValue)) {
			const parsedValue = parseFloat(inputValue);
			setValue([value[0], Math.min(parsedValue, 100)]);
		}
	};

	return (
		<>
			<div className={styles.header}>
				<div className={styles.left}>
					{<img src={svgElement} alt="icon" />}
					{title}
				</div>
				<div className='reset'>
					<button>Reset</button>
				</div>
			</div>
			<div className={styles.body}>
				<Nouislider
					className={`${styles.bg_slider} bg_slider`}
					range={{ min: 0, max: 100 }}
					start={[0, 20, 40, 60, 80, 100]} // Початкові значення двох повзунків
					connect={false}
				/>
				<Nouislider
					className={`${styles.slider} no_slider`}
					range={{ min: 0, max: 100 }}
					start={value} // Початкові значення двох повзунків
					tooltips={[false, true]}
					format={{
						to: formatTooltip as any,
						from: formatTooltip as any,
					}}
					connect={true}
					step={20}
					onChange={handleSliderChange}
				/>
			</div>
			<div className={styles.bottom}>
				<input type="text" className={styles.input} value={value[0]} onChange={handleInputChange1} />
				-
				<input type="text" className={styles.input} value={value[1]} onChange={handleInputChange2} />
			</div>
		</>
	);
};