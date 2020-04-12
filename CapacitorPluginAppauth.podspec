
  Pod::Spec.new do |s|
    s.name = 'CapacitorPluginAppauth'
    s.version = '0.0.1'
    s.summary = 'AppAuth.io based capacitor plugin for OAuth2 public clients'
    s.license = 'MIT'
    s.homepage = 'https://github.com/carlosmart7104/capacitor-plugin-appauth.git'
    s.author = 'Carlos Martínez <carlosmart7194@gmail.com>'
    s.source = { :git => 'https://github.com/carlosmart7104/capacitor-plugin-appauth.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end