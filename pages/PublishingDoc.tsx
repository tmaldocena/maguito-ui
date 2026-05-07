
import React from 'react';
import { Rocket, ShieldCheck, Zap, Key, RefreshCcw, Package, ChevronRight, Terminal, Globe, AlertTriangle, LifeBuoy, Info, BookOpen, Code2, Lock, EyeOff, FileWarning, Ban, Users, AlertCircle } from 'lucide-react';
import { Card, Button, Badge, Alert } from '../components/MaguitoUI';

const PublishingDoc: React.FC = () => {
  const steps = [
    {
      title: "0. Preparar el Caldero",
      desc: "Instala las herramientas y los tipos (libros de hechizos). Sin esto, TypeScript no sabrá qué es 'node' o 'react'.",
      command: "npm install",
      icon: <Package className="text-maguito-blue" />,
      color: "blue"
    },
    {
      title: "1. El Hechizo de Compilación",
      desc: "Genera la carpeta 'dist' con tu código listo para el mundo. Este paso crea los archivos .js y .d.ts.",
      command: "npm run build:lib",
      icon: <Zap className="text-maguito-orange" />,
      color: "orange"
    },
    {
      title: "2. Identifícate ante el Gremio",
      desc: "Vincula tu terminal con tu cuenta oficial de NPM.",
      command: "npm login",
      icon: <Key className="text-maguito-blue" />,
      color: "blue"
    },
    {
      title: "3. Incrementa el Nivel",
      desc: "Sube la versión (patch, minor o major) para que NPM acepte la nueva carga.",
      command: "npm version patch",
      icon: <RefreshCcw className="text-maguito-yellow" />,
      color: "accent"
    },
    {
      title: "4. ¡Lanzamiento Final!",
      desc: "Publica tu magia. ¡A partir de ahora, maguitoui es real en internet!",
      command: "npm publish",
      icon: <Rocket className="text-maguito-green" />,
      color: "success"
    }
  ];

  return (
    <div className="space-y-16">
      <header className="space-y-6">
        <Badge variant="gradient">Nivel Avanzado: Archimago</Badge>
        <h1 className="text-4xl md:text-7xl font-black text-maguito-black tracking-tighter leading-tight italic uppercase">
          Publicar en <span className="text-maguito-red underline decoration-maguito-black underline-offset-8">NPM</span>
        </h1>
        <p className="text-lg md:text-2xl font-bold text-gray-700 max-w-3xl leading-relaxed">
          ¿Listo para compartir tu magia? Sigue este ritual. Si un comando falla, consulta la sección de <span className="text-maguito-red italic">errores comunes</span> abajo.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-12">
        {steps.map((step, i) => (
          <Card key={i} className="relative overflow-visible border-4" shadowColor={step.color} paddingSize="lg">
            <div className="absolute -top-6 -left-6 w-14 h-14 bg-maguito-black text-white rounded-full flex items-center justify-center border-4 border-maguito-white shadow-maguito font-black text-2xl italic">
              {i === 0 ? "★" : i}
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gray-100 rounded-xl border-2 border-maguito-black">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter">{step.title}</h3>
                </div>
                <p className="font-bold text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-maguito-black rounded-maguito-md p-6 relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-maguito-orange"></div>
                  <code className="text-maguito-orange font-mono text-lg block">
                    <span className="text-maguito-blue">$</span> {step.command}
                  </code>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* SECCIÓN DE RESOLUCIÓN DE ERRORES */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <LifeBuoy size={32} className="text-maguito-red animate-bounce" />
          <h2 className="text-3xl font-black uppercase italic">Resolución de Problemas</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <Card className="border-4 border-maguito-red bg-maguito-red/5" paddingSize="lg" shadowColor="danger">
            <div className="flex items-start gap-4">
              <Code2 className="text-maguito-red shrink-0" size={28} />
              <div className="space-y-4">
                <p className="text-xl font-black uppercase italic">Error TS6046: Argument for '--jsx' option must be...</p>
                <p className="font-bold text-gray-700 leading-relaxed">
                  Este error ocurre cuando TypeScript no entiende cómo procesar tus archivos <code className="bg-white px-1">.tsx</code> porque la opción de compilación es inválida.
                </p>
                <div className="p-4 bg-white border-2 border-maguito-black rounded-maguito-md">
                   <p className="text-sm font-black mb-2 uppercase">La Solución:</p>
                   <p className="text-xs font-bold text-gray-600 mb-2">Asegúrate de que en tu <code className="font-black">tsconfig.json</code> la opción <code className="text-maguito-red">"jsx"</code> tenga el valor <code className="text-maguito-green">"react-jsx"</code>.</p>
                   <code className="block p-3 bg-gray-100 rounded font-mono text-xs italic">"jsx": "react-jsx"</code>
                </div>
              </div>
            </div>
          </Card>

          <Card className="border-4 border-maguito-red bg-maguito-red/5" paddingSize="lg" shadowColor="danger">
            <div className="flex items-start gap-4">
              <AlertTriangle className="text-maguito-red shrink-0" size={28} />
              <div className="space-y-4">
                <p className="text-xl font-black uppercase italic">Error TS2688: Cannot find type definition for 'node'</p>
                <p className="font-bold text-gray-700 leading-relaxed">
                  Faltan los "traductores" de Node.js en tu proyecto.
                </p>
                <div className="p-4 bg-white border-2 border-maguito-black rounded-maguito-md">
                   <p className="text-sm font-black mb-2 uppercase">La Solución:</p>
                   <code className="block p-3 bg-gray-100 rounded font-mono text-xs mb-3 italic">npm install --save-dev @types/node</code>
                </div>
              </div>
            </div>
          </Card>

          <Card className="border-4 border-maguito-orange bg-maguito-orange/5" paddingSize="lg" shadowColor="orange">
            <div className="flex items-start gap-4">
              <Info className="text-maguito-orange shrink-0" size={28} />
              <div className="space-y-4">
                <p className="text-xl font-black uppercase italic">Error: "tsup" no se reconoce</p>
                <p className="font-bold text-gray-700">Falta el paso ★ (npm install) o la herramienta no está en el PATH.</p>
                <code className="block p-3 bg-maguito-black text-maguito-orange rounded font-mono text-xs">npx tsup lib.ts --format cjs,esm --dts</code>
              </div>
            </div>
          </Card>

          <Card className="border-4 border-maguito-red bg-maguito-red/5" paddingSize="lg" shadowColor="danger">
            <div className="flex items-start gap-4">
              <Ban className="text-maguito-red shrink-0" size={28} />
              <div className="space-y-4">
                <p className="text-xl font-black uppercase italic">npm ERR! EPUBLISHCONFLICT: Cannot publish over existing version</p>
                <p className="font-bold text-gray-700 leading-relaxed">
                  NPM rechaza tu paquete porque la versión actual ya existe en el registro. No se puede sobrescribir una versión ya publicada.
                </p>
                <div className="p-4 bg-white border-2 border-maguito-black rounded-maguito-md">
                   <p className="text-sm font-black mb-2 uppercase">La Solución:</p>
                   <p className="text-xs font-bold text-gray-600 mb-2">Incrementa la versión antes de publicar:</p>
                   <code className="block p-3 bg-gray-100 rounded font-mono text-xs mb-1 italic">npm version patch  # 1.0.0 → 1.0.1</code>
                   <code className="block p-3 bg-gray-100 rounded font-mono text-xs mb-1 italic">npm version minor  # 1.0.0 → 1.1.0</code>
                   <code className="block p-3 bg-gray-100 rounded font-mono text-xs italic">npm version major  # 1.0.0 → 2.0.0</code>
                </div>
              </div>
            </div>
          </Card>

          <Card className="border-4 border-maguito-red bg-maguito-red/5" paddingSize="lg" shadowColor="danger">
            <div className="flex items-start gap-4">
              <FileWarning className="text-maguito-red shrink-0" size={28} />
              <div className="space-y-4">
                <p className="text-xl font-black uppercase italic">npm ERR! 403 Forbidden: You cannot publish over previously published versions</p>
                <p className="font-bold text-gray-700 leading-relaxed">
                  Puede significar que no tienes permisos para publicar en ese nombre de paquete, o que ya fue publicado por otro usuario.
                </p>
                <div className="p-4 bg-white border-2 border-maguito-black rounded-maguito-md">
                   <p className="text-sm font-black mb-2 uppercase">La Solución:</p>
                   <p className="text-xs font-bold text-gray-600">Verifica que estás logueado con la cuenta correcta (<code className="text-maguito-blue">npm whoami</code>) y que el nombre del paquete en <code className="font-black">package.json</code> está disponible en <a href="https://www.npmjs.com" target="_blank" className="text-maguito-blue underline">npmjs.com</a>.</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="border-4 border-maguito-yellow bg-maguito-yellow/5" paddingSize="lg" shadowColor="accent">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-maguito-yellow shrink-0" size={28} />
              <div className="space-y-4">
                <p className="text-xl font-black uppercase italic">npm ERR! 402 Payment Required</p>
                <p className="font-bold text-gray-700 leading-relaxed">
                  El nombre que intentas usar requiere un pago o el scope (ej. <code className="bg-white px-1">@tu-org/paquete</code>) necesita configuración adicional.
                </p>
                <div className="p-4 bg-white border-2 border-maguito-black rounded-maguito-md">
                   <p className="text-sm font-black mb-2 uppercase">La Solución:</p>
                   <p className="text-xs font-bold text-gray-600">Para scopes públicos, agrega <code className="text-maguito-green">{'"publishConfig": { "access": "public" }'}</code> en tu <code className="font-black">package.json</code>.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* SECCIÓN DE SEGURIDAD Y TOKENS */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <ShieldCheck size={32} className="text-maguito-green" />
          <h2 className="text-3xl font-black uppercase italic">Seguridad y Tokens de NPM</h2>
        </div>

        <Card className="border-4 border-maguito-green bg-maguito-green/5" paddingSize="lg" shadowColor="success">
          <div className="flex items-start gap-4">
            <Lock className="text-maguito-green shrink-0" size={28} />
            <div className="space-y-4">
              <p className="text-xl font-black uppercase italic">Tokens de Acceso: Tu Llave del Caldero</p>
              <p className="font-bold text-gray-700 leading-relaxed">
                Nunca compartas tu token de NPM. Si se filtra, alguien puede publicar código malicioso bajo tu nombre. Trata tu token como la contraseña de tu email.
              </p>
              <div className="p-4 bg-white border-2 border-maguito-black rounded-maguito-md space-y-3">
                <p className="text-sm font-black uppercase mb-2">Buenas Prácticas:</p>
                <div className="space-y-2">
                  <div className="flex gap-3 items-start">
                    <span className="text-maguito-green font-black">1.</span>
                    <p className="text-sm font-bold text-gray-700">Nunca commitees archivos <code className="bg-gray-100 px-1">.npmrc</code> o <code className="bg-gray-100 px-1">.env</code> a Git. Agrégalos a tu <code className="font-black">.gitignore</code>.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-maguito-green font-black">2.</span>
                    <p className="text-sm font-bold text-gray-700">Genera tokens con permisos limitados (solo <code className="text-maguito-blue">publish</code>, no <code className="text-maguito-red">full access</code>).</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-maguito-green font-black">3.</span>
                    <p className="text-sm font-bold text-gray-700">En CI/CD (GitHub Actions, etc.), usa <strong>secrets del repositorio</strong>, nunca hardcodees tokens en el código.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-maguito-green font-black">4.</span>
                    <p className="text-sm font-bold text-gray-700">Si crees que tu token fue comprometido, revócalo inmediatamente en <a href="https://www.npmjs.com/settings/tokens" target="_blank" className="text-maguito-blue underline">npmjs.com/settings/tokens</a>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-4 border-maguito-blue bg-maguito-blue/5" paddingSize="lg" shadowColor="blue">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <EyeOff className="text-maguito-blue" size={24} />
                <p className="text-lg font-black uppercase italic">Token en CI/CD</p>
              </div>
              <p className="text-sm font-bold text-gray-700">Así se usa un token de forma segura en GitHub Actions:</p>
              <div className="bg-maguito-black rounded-maguito-md p-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-maguito-blue"></div>
                <code className="text-maguito-orange font-mono text-xs block whitespace-pre">{`- name: Publish to NPM
  run: npm publish --access public
  env:
    NODE_AUTH_TOKEN: \${{ secrets.NPM_TOKEN }}`}</code>
              </div>
            </div>
          </Card>

          <Card className="border-4 border-maguito-orange bg-maguito-orange/5" paddingSize="lg" shadowColor="orange">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Users className="text-maguito-orange" size={24} />
                <p className="text-lg font-black uppercase italic">Colaboradores</p>
              </div>
              <p className="text-sm font-bold text-gray-700">Para agregar colaboradores a tu paquete:</p>
              <div className="bg-maguito-black rounded-maguito-md p-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-maguito-orange"></div>
                <code className="text-maguito-orange font-mono text-xs block whitespace-pre">{`# Dar acceso a otro mago
npm owner add <usuario> maguitoui

# Ver quién tiene acceso
npm owner ls maguitoui`}</code>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* SECCIÓN DE BUENAS PRÁCTICAS */}
      <section className="bg-maguito-yellow/10 border-4 border-dashed border-maguito-black rounded-maguito-lg p-8 md:p-12 space-y-8">
        <div className="flex items-center gap-4">
          <BookOpen size={32} className="text-maguito-black" />
          <h2 className="text-3xl font-black uppercase italic">Buenas Prácticas de Publicación</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Alert type="info" className="border-2">
            <p className="font-black text-sm uppercase mb-2">Verifica el package.json</p>
            <p className="text-xs">Si el nombre <code className="font-black">"maguitoui"</code> ya existe en NPM, usa un nombre único como <code className="font-black">"maguitoui-[tu-nombre]"</code>.</p>
          </Alert>
          <Alert type="warning" className="border-2">
            <p className="font-black text-sm uppercase mb-2">Build antes de Publish</p>
            <p className="text-xs">Siempre corre el build antes de publicar para asegurarte de que el código que subes es el más reciente.</p>
          </Alert>
          <Alert type="success" className="border-2">
            <p className="font-black text-sm uppercase mb-2">Prueba localmente primero</p>
            <p className="text-xs">Usa <code className="font-black">npm pack</code> y <code className="font-black">npm install ./archivo.tgz</code> en otro proyecto para verificar que todo funciona antes de publicar.</p>
          </Alert>
          <Alert type="info" className="border-2">
            <p className="font-black text-sm uppercase mb-2">Mantén el Changelog</p>
            <p className="text-xs">Documenta los cambios de cada versión en un archivo <code className="font-black">CHANGELOG.md</code> para que los usuarios sepan qué hay de nuevo.</p>
          </Alert>
        </div>
      </section>

      <footer className="bg-maguito-black text-white p-12 rounded-maguito-lg text-center space-y-8 border-4 border-maguito-black shadow-maguito-lg">
        <div className="w-24 h-24 bg-maguito-white border-4 border-maguito-orange rounded-full mx-auto flex items-center justify-center">
          <Globe size={48} className="text-maguito-black animate-spin-slow" />
        </div>
        <h2 className="text-4xl font-black uppercase italic tracking-tighter">¡Ya eres global!</h2>
        <Button size="lg" variant="accent" icon={<Package />}>Ver mi Perfil en NPM</Button>
      </footer>
    </div>
  );
};

export default PublishingDoc;
