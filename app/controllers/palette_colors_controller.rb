class PaletteColorsController < ApplicationController
  def create
    PaletteColor.new (
      palette_id: params[:palette_id]
      color_id: params[:color_id]
      )
  end
end
