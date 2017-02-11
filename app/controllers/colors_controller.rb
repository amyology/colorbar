class ColorsController < ApplicationController
  def create
    Color.create(
      value: params[:value]
      )
  end
end
