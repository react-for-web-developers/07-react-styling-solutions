function Main({ image, page }) {
  return (
      <main className="container py-5">
        <div className="bg-light p-3 rounded">
          <h2>React Router + Context API (React Bootstrap) Demo</h2>
          <img src={image} style={{ width: 600, height: 400, padding: '1rem 0' }} alt={page} />
          <h2>{page} Page</h2>
        </div>
      </main>
  );
}

export default Main;