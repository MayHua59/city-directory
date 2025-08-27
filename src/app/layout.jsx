import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       
          <ThemeProvider theme={theme}>
            {/* CssBaseline kicks off an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {children}
          </ThemeProvider>
        
      </body>
    </html>
  );
}