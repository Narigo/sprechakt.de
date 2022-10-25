<script lang="ts">
	import { POEM_CONTEXT_KEY, type PoemStore } from '../../poem.store';
	import { getContext, onDestroy } from 'svelte';

	let inputField: HTMLTextAreaElement | null = null;
	let inputIsFocused = false;

	let { poem, lastWordTyped, syllables } = getContext<PoemStore>(POEM_CONTEXT_KEY);
	let text: string = $poem.text;

	if (inputField) {
		autoGrow(inputField);
	}

	const unsubscribe = poem.subscribe((p) => (text = p.text));
	onDestroy(() => {
		unsubscribe();
	});

	function findLastWord(target: EventTarget & HTMLTextAreaElement) {
		const start = text.slice(0, target.selectionStart);
		const end = text.slice(target.selectionEnd);
		const currentWordFront = /\b(\p{L}*)$/u.exec(start);
		const currentWordBack = /^(\p{L}*)\b/u.exec(end);
		const possibleWord = `${currentWordFront ? currentWordFront[1] : ''}${
			currentWordBack ? currentWordBack[1] : ''
		}`;
		if (possibleWord !== '') {
			$lastWordTyped = possibleWord;
		}
	}

	function autoGrow(element: HTMLTextAreaElement) {
		element.style.height = '1px';
		element.style.height = `${element.scrollHeight + 10}px`;
		element.style.width = '1px';
		element.style.width = `${element.scrollWidth}px`;
	}

	const onInput = (e: Event & { currentTarget: EventTarget & HTMLTextAreaElement }) => {
		autoGrow(e.currentTarget);
		$poem = { ...$poem, text: e.currentTarget.value };
	};

	const onKeyUp = (e: KeyboardEvent & { currentTarget: HTMLTextAreaElement }) => {
		findLastWord(e.currentTarget);
	};

	function onBlur() {
		inputIsFocused = false;
		$poem = { ...$poem, text };
	}

	const onClick = (e: MouseEvent & { currentTarget: HTMLTextAreaElement }) => {
		inputIsFocused = true;
		findLastWord(e.currentTarget);
	};

	const onFocus = (_e: FocusEvent & { currentTarget: HTMLTextAreaElement }) => {
		inputIsFocused = true;
	};

	function focusInput() {
		if (!inputIsFocused && inputField) {
			inputField.focus();
			findLastWord(inputField);
		}
	}
</script>

<div class="poem" on:click={focusInput}>
	<ol class="syllables">
		{#each $syllables as currentLine}
			<li class={currentLine.okay ? 'okay' : 'different'}>
				{currentLine.syllables}
			</li>
		{/each}
	</ol>
	<div class="input-wrapper">
		<textarea
			class="input"
			placeholder="Inhalt des Gedichts ..."
			bind:this={inputField}
			on:blur={onBlur}
			on:click={onClick}
			on:focus={onFocus}
			on:keyup={onKeyUp}
			on:input={onInput}
			bind:value={text}
		/>
	</div>
	<div class="padding-right" />
</div>

<style>
	.poem {
		display: grid;
		grid-template-columns: 2em 1fr 2em;
		font: var(--poem-content-font);
		letter-spacing: 2px;
		position: relative;
		border: 1px solid rgba(0, 0, 0, 0.2);
		padding: 2em 1px;
	}

	.poem:focus-within {
		border: 2px solid rgba(0, 0, 0, 1);
		padding: calc(2em - 1px) 0 calc(2em - 1px) 0;
		outline: none;
	}

	.syllables {
		align-items: center;
		background-color: white;
		display: flex;
		flex: 0 0 auto;
		flex-direction: column;
		color: rgba(0, 0, 0, 0.2);
		list-style: none;
		margin: 0;
		padding: 0;
		width: 2em;
	}

	.syllables li {
		line-height: 2em;
		margin: 0;
		padding: 0;
		text-align: center;
	}

	.different {
		color: rgba(255, 51, 34, 0.4);
	}

	.padding-right {
		flex: 0 0 auto;
		width: 2em;
	}

	.input-wrapper {
		display: flex;
		overflow-x: auto;
	}

	.input {
		border: 0;
		flex: 1 0 auto;
		font: var(--poem-content-font);
		line-height: 2em;
		letter-spacing: 2px;
		overflow: hidden;
		resize: none;
		white-space: nowrap;
	}

	.input:focus {
		outline: none;
	}
</style>
