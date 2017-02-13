class ColorsController < ApplicationController
  def create
    Color.find_or_create_by(
      value: params[:value]
      )
  end
end
