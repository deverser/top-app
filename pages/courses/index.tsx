import React from 'react';
import { Htag } from '../../components';
import { withLayout } from '../../layout/Layout';
import { FirstLevelMenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';
import CoursesIcon from '../../layout/Menu/icons/courses.svg';


const coursesItem: FirstLevelMenuItem = {
	route: 'courses',
	name: 'Курсы',
	icon: CoursesIcon,
	id: TopLevelCategory.Courses
};

function Courses(): JSX.Element {
	return (
		<>
			<Htag tag='h1'>{coursesItem.name}</Htag>
		</>
	);
}

export default withLayout(Courses);
