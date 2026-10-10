import Container from "@/components/ui/Container";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="break-keep font-mono text-xs text-muted">
          © 2026 {profile.nameKo} ({profile.nameEn}) · 취약점을 찾는 데서 끝내지
          않고, 고칠 수 있게 전달합니다.
        </p>
        <a
          href="#hero"
          className="font-mono text-xs text-muted transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          맨 위로 ↑
        </a>
      </Container>
    </footer>
  );
}
