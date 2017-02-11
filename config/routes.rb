Rails.application.routes.draw do
  get '/' => 'palettes#index'
  post '/' => 'palettes#create'

  post '/' => 'palette_colors#create'

  post '/' => 'colors#create'
end
