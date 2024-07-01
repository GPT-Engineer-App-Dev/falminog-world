function Index() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Flamingo World</h1>
        <p className="text-lg mb-6">Discover the beauty and elegance of flamingos.</p>
        <img src="/images/flamingo-hero.jpg" alt="Flamingo" className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-6" />
        <div className="space-x-4">
          <a href="#about" className="text-primary hover:underline">Learn More</a>
          <a href="#gallery" className="text-primary hover:underline">View Gallery</a>
        </div>
      </div>
    </main>
  );
}

export default Index;