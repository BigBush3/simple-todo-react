import React from 'react'

export default function TodoItem({ todo }) {
	return (
		<ul class="mask-list complete-list">
			<li>
				<div>
					<input type="checkbox" checked />
					<span>
						{todo[0]}
					</span>
				</div>
				<button class="btn-remove">REMOVE</button>
			</li>
		</ul>
	)
}