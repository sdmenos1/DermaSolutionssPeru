import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Logo and Company Info */}
          <div>
            <Image
              src="/Logo.png"
              alt="Dermosolution Logo"
              width={180}
              height={60}
              className="h-16 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Soluciones profesionales en dermatología y estética para el
              cuidado integral de tu piel.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-4">
              Enlaces Rápidos
            </h3>
            <nav className="space-y-2">
              <Link
                href="#inicio"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Inicio
              </Link>
              <Link
                href="#servicios"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Servicios
              </Link>
              <Link
                href="#nosotros"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Nosotros
              </Link>
              <Link
                href="#contacto"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contacto
              </Link>
            </nav>
          </div>

          {/* Company Details */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-4">
              Información Legal
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">
                  Razón Social:
                </span>
                <br />
                Sanfale Group S.A.C.
              </p>
              <p>
                <span className="font-medium text-foreground">R.U.C.:</span>
                <br />
                20611344539
              </p>
              <p>
                <span className="font-medium text-foreground">Dirección:</span>
                <br />
                Av. General Garzón 1283, consultorio 412
                <br />
                Jesús María, Lima
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-center text-muted-foreground">
            © {currentYear} Dermosolution - Sanfale Group S.A.C. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
