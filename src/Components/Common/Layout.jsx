
const Layout = ({ children }) => {
  return (
    <div
      className="min-h-screen font-outfit"
      style={{
        backgroundColor: '#f6f3ec',
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-pixels.png")',
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
