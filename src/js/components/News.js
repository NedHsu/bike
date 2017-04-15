import React from 'react';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';


const News = ({
  title,
  getNews
}) => (
  <Box pad='medium'
  	flex={true}
  	// primary={true}
  	full={true}>
  	NewsComponent 
  	{title}
  	<Box>
  		<Card thumbnail='/img/carousel-1.png'
			  label='Sample Label'
			  heading='Sample Heading'
			  description='Sample description providing more details.'
			  link={<Anchor href=''
			  label='Sample anchor' />} />
  	</Box>
  	<Box>
  		<Card thumbnail='/img/carousel-1.png'
			  label='Sample Label'
			  heading='Sample Heading'
			  description='Sample description providing more details.'
			  link={<Anchor href=''
			  label='Sample anchor' />} />
  	</Box>
  </Box>
);

News.propTypes = {
  title: React.PropTypes.string,
};

export default News;