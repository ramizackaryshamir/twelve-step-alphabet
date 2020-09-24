class RemoveReferenceFromReviews < ActiveRecord::Migration[6.0]
  def change
    remove_column :reviews, :references, :string
  end
end
