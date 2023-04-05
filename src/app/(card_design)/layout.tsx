
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
				<h1>This is shared layout</h1>

				{children}</body>
    </html>
  );
}
