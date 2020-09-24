class RemoveMeetingFromReviews < ActiveRecord::Migration[6.0]
  def change
    remove_column :reviews, :meeting, :string
  end
end
