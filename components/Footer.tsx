export default function Footer() {
  return (
    <footer>
      <small className="mt-auto flex flex-col items-center justify-end gap-2 border-t-2 border-lego-red bg-zinc-50 p-2 sm:flex-row">
        <a
          href="https://agnieszka-wilczek.netlify.app"
          target="_blank"
          className="border-r border-lego-red pr-2 md:mr-2 md:rounded-md md:border-r-0 md:bg-lego-red md:p-2 md:text-white"
        >
          &copy; Veelcheck 2024
        </a>
        <p>I made this and it&apos;s my precious.</p>
      </small>
    </footer>
  );
}
