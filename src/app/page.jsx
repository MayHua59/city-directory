
// import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { fetchCategories, fetchArticles } from '@/lib/api';
// import {CategoryList} from '@/sections/CategoryList';
// import {ArticleList} from '@/sections/ArticleList';
// import { SeeAllButton } from '@/components/SeeAllButton';


// export default async function HomePage() {
//   const articles = await fetchArticles();
//   const categories = await fetchCategories();
//   if (!articles || !categories) {
//     return (
//       <Container maxWidth="md" sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <Box
//           component="img"
//           src="/images/chatting.png" 
//           alt="Error loading data"
//           sx={{ width: 180, height: 180, mb: 2 }}
//         />
//       </Container>
//     );
//   }

//   return (
//     <Box>
//       {/* Hero Section */}
//       <Box 
//         sx={{
//           py: 8,
//           px: 2,
//           textAlign: 'center',
//           backgroundColor: '#f0f4f8',
//           borderBottomLeftRadius: 16,
//           borderBottomRightRadius: 16,
//         }}
//       >
//         <Box
//           component="img"
//           src="/images/coffee-shop.png" 
//           alt="Explore Our Content"
//           sx={{ width: 220, height: 220, mx: 'auto', mb: 2 }}
//         />
//       </Box>

//       <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
//         {/* Categories Section with Accordion */}
//         <Accordion defaultExpanded sx={{ boxShadow: 3, mb: 6, borderRadius: '8px !important' }}>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="categories-content"
//             id="categories-header"
//           >
//             <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
//               Categories
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <CategoryList categories={categories} />
//           </AccordionDetails>
//         </Accordion>

       
//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
//             <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 0 }}>
//             Latest Articles
//           </Typography>
//           <SeeAllButton route="/articles" name="See All Articles" />
          
//         </Box>
//         <ArticleList articles={articles} />
//       </Container>
//     </Box>
//   );
// }

// Articles 
import { Suspense } from 'react';
import { fetchArticles } from '@/lib/api';
import { Container, Box, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArticleFilters from '@/components/articles/ArticleFilters';
import Loading from '@/components/Loading';



export default async function ArticlesPage() {
  const articles = await fetchArticles();

  if (!articles || articles.length === 0) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        
        <Typography variant="h5" color="error" align="center">
          Failed to load articles. Please try again later.
        </Typography>
      </Container>
    );
  }

  const uniqueCategories = [
    ...new Set(
      articles.map(article => article.category?.name).filter(Boolean)
    ),
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>

      <Box
        component="img"
        src="/images/shopping-cart.jfif"
        alt="Cover image"
        sx={{
          width: '100%',
          height: 200,
          objectFit: 'cover',
          borderRadius: 2,
          mb: 4,
        }}
      />

      <ArticleFilters uniqueCategories={uniqueCategories} articles={articles} />

       {/* Suspense handles client hydration fallback */}
      <Suspense fallback={<Loading />}>
        <ArticleFilters uniqueCategories={uniqueCategories} articles={articles} />
      </Suspense>
    </Container>
  );
}