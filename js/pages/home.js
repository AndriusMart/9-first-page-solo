/* myskills */
import { myskills } from '../components/myskills.js';
import { myskillsDataRight } from '../data/myskillsDataRight.js';
myskills('#myskills_block_right', myskillsDataRight);


import { servicesDataLeft } from '../data/myskillsDataLeft.js';
myskills('#myskills_block_left', servicesDataLeft);
/* myskills */
/*info */
import { info } from '../components/info.js';
import { infoData } from '../data/infoData.js';
info('#info_block', infoData);
/*info */
/*services */
import { services } from '../components/services.js';
import { servicesData } from '../data/servicesData.js';

services('#services_block', servicesData);

/*services */
/*testimonials */
import { testimonialsData } from '../data/testimonialsData.js';
import { testimonials } from '../components/testimonials.js';

testimonials ('#testSlides', testimonialsData)

/*testimonials */

/*blog */
import { blogData } from '../data/blogData.js';
import { blog } from '../components/blog.js';

blog ('#blog_block', blogData)
/*blog */